from fastapi import FastAPI, HTTPException
from models import User
from database import SessionLocal
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8001"],  # Замените на URL вашего фронтенда
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Пример базы данных пользователей (можно заменить на настоящую базу данных)
users_db = []

print("Привет!")

@app.post("/register")
async def register_user(user: User):
    # Проверяем, что пользователь с таким email уже не зарегистрирован
    if any(existing_user.email == user.email for existing_user in users_db):
        raise HTTPException(status_code=400, detail="User with this email already registered")
    
    # Добавляем пользователя в базу данных
    db = SessionLocal()
    users_db.append(user)
    db.commit()
    db.close()
    
    return {"message": "User registered successfully"}

@app.get("/hello")
async def return_hello():
    return {"message": "Hello, Dear User"}