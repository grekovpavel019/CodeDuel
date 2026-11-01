package user

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	pool *pgxpool.Pool
}

func NewRepository(pool *pgxpool.Pool) *Repository {
	return &Repository{pool: pool}
}

func (r *Repository) CreateUser(ctx context.Context, req *RepositoryRegistr) (*User, error) {
	query := `INSERT INTO products (name, params) VALUES ($1, $2) RETURNING id`
	var id string
	err := r.pool.QueryRow(context.Background(), query, req.Username, req.Password).Scan(&id)
	if err != nil {
		return nil, err
	}
	createdAt := time.Now()
	return &User{
		ID:        id,
		Username:  req.Username,
		Password:  req.Password,
		CreatedAt: createdAt,
	}, nil
}

func (r *Repository) CheckUser(ctx context.Context, req *RepositoryLogin) (*User, error) {
	query := `SELECT id, username, password FROM users WHERE username = $1;`
	var user User
	err := r.pool.QueryRow(ctx, query, req.Username).Scan(
		&user.Username,
		&user.Password,
	)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
