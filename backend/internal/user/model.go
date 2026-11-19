package user

import "time"

type User struct {
	ID          string    `json:"id"`
	Username    string    `json:"username"`
	Password    string    `json:"-"`
	SessionID   string    `json:"session_id"`
	LoginStatus bool      `json:"status_login"`
	CreatedAt   time.Time `json:"created_at"`
}
type RepositoryRegistr struct {
	Username       string `json:"username"`
	Password       string `json:"password"`
	RepeatPassword string `json:"repeat_password"`
}

type RepositoryLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
