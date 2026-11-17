package user

import (
	"context"
	"fmt"
)

type loginService struct {
	repo *Repository
}

func NewLoginService(repo *Repository) *loginService {
	return &loginService{repo: repo}
}

func (l *loginService) LoginUser(ctx context.Context, req *RepositoryLogin) error {
	param, err := l.repo.CheckUser(ctx, req)
	if err != nil {
		return fmt.Errorf("%s", err)
	}
	if param.Password != req.Password {
		return fmt.Errorf("Пароль или имя пользователя не подходит")
	}
	return nil
}
