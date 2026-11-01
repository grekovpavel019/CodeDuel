package main

import (
	"context"
	"log"
	"net/http"

	"backend/internal/user" // Путь к твоему пакету (зависит от имени модуля в go.mod)

	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	dsn := "postgres://user:password@localhost:5432/mydb"

	// 1. Подключаемся к БД
	pool, err := pgxpool.New(context.Background(), dsn)
	if err != nil {
		log.Fatal("Ошибка подключения к БД: ", err)
	}
	defer pool.Close()

	// 2. Создаем репозиторий (передаем пул)
	userRepo := user.NewRepository(pool)

	// 3. Создаем сервис (передаем репозиторий)
	userService := user.NewRegisterService(userRepo)

	// 4. Создаем хендлер (передаем сервис)
	userHandler := user.NewRegisterHandler(userService)

	// 5. Регистрируем роут (маршрут)
	http.HandleFunc("/register", userHandler.Register)

	// 6. Запускаем сервер на порту 8080
	log.Println("Сервер запущен на порту :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
