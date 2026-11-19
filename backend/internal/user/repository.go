package user

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	pool *pgxpool.Pool
}

func NewRepository(pool *pgxpool.Pool) *Repository {
	return &Repository{pool: pool}
}

func (r *Repository) CreateUser(ctx context.Context, req *RepositoryRegistr, session_id string) (*User, error) {
	query := `INSERT INTO users (username, password, session_id) VALUES ($1, $2, $3) RETURNING id`
	var id string
	err := r.pool.QueryRow(context.Background(), query, req.Username, req.Password, session_id).Scan(&id)
	if err != nil {
		return nil, err
	}
	createdAt := time.Now()
	return &User{
		ID:          id,
		Username:    req.Username,
		Password:    req.Password,
		SessionID:   session_id,
		LoginStatus: true,
		CreatedAt:   createdAt,
	}, nil
}

func (r *Repository) CheckUser(ctx context.Context, req *RepositoryLogin) (*User, error) {
	query := `SELECT username, password, status_login, COALESCE(session_id, '') FROM users WHERE username = $1;`
	var user User
	err := r.pool.QueryRow(ctx, query, req.Username).Scan(
		&user.Username,
		&user.Password,
		&user.LoginStatus,
		&user.SessionID,
	)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *Repository) LoginUser(ctx context.Context, username string, session_id string) error {
	// Исправлен синтаксис SET и добавлен знак = в WHERE
	query := `UPDATE users SET status_login = true, session_id = $1 WHERE username = $2`
	tag, err := r.pool.Exec(ctx, query, session_id, username)
	if err != nil {
		return fmt.Errorf("failed to update user session: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return fmt.Errorf("user with id %s not found", username)
	}

	// Логируем только после успешного выполнения (и без полного session_id в проде)
	log.Printf("user logged in: id=%s", username)
	return nil
}

func (r *Repository) LogoutnUser(ctx context.Context, session_id string) error {
	query := `UPDATE users SET status_login = false, session_id = NULL WHERE session_id = $1`
	tag, err := r.pool.Exec(ctx, query, session_id)
	if err != nil {
		return err
	}
	if tag.RowsAffected() == 0 {
		return fmt.Errorf("user with id %s not found", session_id)
	}
	return nil
}
