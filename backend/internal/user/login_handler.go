package user

import (
	"encoding/json"
	"net/http"
)

type loginHandler struct {
	service *loginService
}

func NewLoginHandler(service *loginService) *loginHandler {
	return &loginHandler{service: service}
}

func (l *loginHandler) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Метод не подходит", http.StatusMethodNotAllowed)
		return
	}

	var req RepositoryLogin
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Неверный формат json", http.StatusBadRequest)
		return
	}
	err = l.service.LoginUser(r.Context(), &req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Логин прошел успешно"))
}
