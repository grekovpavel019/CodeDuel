package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"backend/internal/user"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbSslMode := os.Getenv("DB_SSLMODE")

	dsn := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=%s", dbUser, dbPassword, dbHost, dbPort, dbName, dbSslMode)

	// 1. Подключаемся к БД
	pool, err := pgxpool.New(context.Background(), dsn)
	if err != nil {
		log.Fatal("Ошибка подключения к БД: ", err)
	}
	defer pool.Close()

	// 2. Создаем репозиторий (передаем пул)
	userRepo := user.NewRepository(pool)

	// 3. Создаем сервис (передаем репозиторий)
	userServiceReg := user.NewRegisterService(userRepo)
	userHandlerReg := user.NewRegisterHandler(userServiceReg)

	userServiceLog := user.NewLoginService(userRepo)
	userHandlerLog := user.NewLoginHandler(userServiceLog)

	// 5. Регистрируем роут (маршрут)
	http.HandleFunc("/register", userHandlerReg.Register)
	http.HandleFunc("/login", userHandlerLog.Login)

	// 6. Запускаем сервер на порту 8080
	log.Println("Сервер запущен на порту :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
