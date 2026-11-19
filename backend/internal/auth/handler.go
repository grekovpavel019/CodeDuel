package auth

import (
	"encoding/json"
	"net/http"

	"backend/internal/user"
)

type registerHandler struct {
	service *RegisterService
}

func NewRegisterHandler(service *RegisterService) *registerHandler {
	return &registerHandler{service: service}
}

type loginHandler struct {
	service *loginService
}

func NewLoginHandler(service *loginService) *loginHandler {
	return &loginHandler{service: service}
}

type logoutHandler struct {
	service *logoutService
}

func NewLogoutHandler(service *logoutService) *logoutHandler {
	return &logoutHandler{service: service}
}

func (h *registerHandler) Register(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Метод не подходит", http.StatusMethodNotAllowed)
		return
	}

	var req user.RepositoryRegistr
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Неверный формат Json", http.StatusBadRequest)
		return
	}
	session_id, err := GenerativHex()
	if err != nil {
		http.Error(w, "Ошибка сервера", http.StatusBadRequest)
	}
	err = h.service.RegisterUser(r.Context(), &req, session_id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	AddCoock(w, session_id)
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Регистрация прошла"))

}

func (l *loginHandler) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Метод не подходит", http.StatusMethodNotAllowed)
		return
	}

	var req user.RepositoryLogin
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Неверный формат json", http.StatusBadRequest)
		return
	}
	session_id, err := GenerativHex()
	if err != nil {
		http.Error(w, "Ошибка сервера", http.StatusBadRequest)
	}
	err = l.service.LoginUser(r.Context(), &req, session_id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	AddCoock(w, session_id)
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Логин прошел успешно"))
}

func (l *logoutHandler) Logout(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Метод не подходит", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_id")
	err = l.service.Logout(r.Context(), cookie.Value)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("вышли успешно успешно"))
}

// Добовление hex в куки и удаление
func AddCoock(w http.ResponseWriter, sessionId string) {
	http.SetCookie(w, &http.Cookie{
		Name:     "session_id",
		Value:    sessionId,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	})
}

func DaleteCoock(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     "session_id",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
	})
}
