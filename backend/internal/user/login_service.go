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
	_, err := l.repo.CheckUser(ctx, req)
	if err != nil {
		return fmt.Errorf("%s", err)
	}
	return err
}
