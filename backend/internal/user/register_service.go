package user

import (
	"context"
	"fmt"
	"log"
)

type RegisterService struct {
	repo *Repository
}

func NewRegisterService(repo *Repository) *RegisterService {
	return &RegisterService{repo: repo}
}

func (r *RegisterService) RegisterUser(ctx context.Context, req *RepositoryRegistr) error {
	if req.Password == "" || req.Username == "" || req.RepeatPassword == "" {
		return fmt.Errorf("Все поля должны быть заполнены")
	}
	if req.Password != req.RepeatPassword {
		return fmt.Errorf("Пароли не совподают")
	}
	_, err := r.repo.CreateUser(ctx, req)
	if err != nil {
		log.Println(err)
		return fmt.Errorf("Ошибка записи в бд")
	}
	return nil
}
