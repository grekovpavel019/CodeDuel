package auth

import (
	"context"
	"fmt"
	"log"

	"crypto/rand"
	"encoding/hex"

	"backend/internal/user"
)

// Создание hex

func GenerativHex() (string, error) {
	bytes := make([]byte, 32)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

// Регистрация
type RegisterService struct {
	repo *user.Repository
}

func NewRegisterService(repo *user.Repository) *RegisterService {
	return &RegisterService{repo: repo}
}

// Логин
type loginService struct {
	repo *user.Repository
}

func NewLoginService(repo *user.Repository) *loginService {
	return &loginService{repo: repo}
}

// Разлогирование
type logoutService struct {
	repo *user.Repository
}

func NewLogoutService(repo *user.Repository) *logoutService {
	return &logoutService{repo: repo}
}

// Регистрация
func (r *RegisterService) RegisterUser(ctx context.Context, req *user.RepositoryRegistr, session_id string) error {

	if req.Password == "" || req.Username == "" || req.RepeatPassword == "" {
		return fmt.Errorf("все поля должны быть заполнены")
	}

	if req.Password != req.RepeatPassword {
		return fmt.Errorf("пароли не совпадают")
	}

	// if er != nil {
	// 	return fmt.Errorf("Ошибка сервера: %w", er)
	// }
	_, err := r.repo.CreateUser(ctx, req, session_id)
	if err != nil {
		return fmt.Errorf("ошибка записи в БД: %w", err)
	}
	return nil
}

// Логин
func (l *loginService) LoginUser(ctx context.Context, req *user.RepositoryLogin, session_id string) error {

	checkUser, err := l.repo.CheckUser(ctx, req)
	if err != nil || req.Password != checkUser.Password {
		return fmt.Errorf("Неверный имя пользователя или пароль: %w", err)
	}
	if checkUser.LoginStatus == true {
		return fmt.Errorf("Даный аккаунт уже актевирован")
	}
	var username string
	username = checkUser.Username
	log.Default().Print(username)
	l.repo.LoginUser(ctx, username, session_id)
	return nil
}

// logout
func (l *logoutService) Logout(ctx context.Context, session_id string) error {
	err := l.repo.LogoutnUser(ctx, session_id)
	if err != nil {
		return fmt.Errorf("Ошабка сервера: %w", err)
	}
	return nil
}
