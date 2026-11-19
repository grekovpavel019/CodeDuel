package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"backend/internal/auth"
	"backend/internal/user"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatal(err)
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
	//Регсстрация
	authServiceReg := auth.NewRegisterService(userRepo)
	authHandlerReg := auth.NewRegisterHandler(authServiceReg)
	//Регсстрация логин
	authServiceLog := auth.NewLoginService(userRepo)
	authHandlerLog := auth.NewLoginHandler(authServiceLog)
	//Регсстрация logout
	authServiceLogout := auth.NewLogoutService(userRepo)
	authHandlerLogout := auth.NewLogoutHandler(authServiceLogout)

	// 5. Регистрируем роут (маршрут)
	http.HandleFunc("/register", authHandlerReg.Register)
	http.HandleFunc("/login", authHandlerLog.Login)
	http.HandleFunc("/logout", authHandlerLogout.Logout)

	// 6. Запускаем сервер на порту 8080
	log.Println("Сервер запущен на порту :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
