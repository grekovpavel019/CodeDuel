package user

import (
	"encoding/json"
	"net/http"
)

type registerHandler struct {
	service *RegisterService
}

func NewRegisterHandler(service *RegisterService) *registerHandler {
	return &registerHandler{service: service}
}

func (h *registerHandler) Register(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Метод не подходит", http.StatusMethodNotAllowed)
		return
	}

	var req RepositoryRegistr
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Неверный формат Json", http.StatusBadRequest)
		return
	}
	err = h.service.RegisterUser(r.Context(), &req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Регистрация прошла"))

}
