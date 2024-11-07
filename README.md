# KappStore
Store for internal projects


#How to start

screen -S new_screen
cd to_folder
unicorn main:app -- --host 0.0.0.0
Exit with Ctrl+A+D

Основные компоненты:

1. services/ - каждый микросервис в отдельной директории
2. libs/ - общие библиотеки, используемые всеми сервисами
3. tests/ - тесты всех уровней
4. deploy/ - конфигурации для развертывания
5. docs/ - документация проекта
6. scripts/ - вспомогательные скрипты


journey-platform/
├── .github/                      # GitHub Actions и другие CI/CD конфигурации
│   └── workflows/
│
├── services/                     # Микросервисы
│   ├── api_gateway/             # API Gateway сервис
│   │   ├── Dockerfile
│   │   └── src/
│   │
│   ├── auth_service/            # Сервис аутентификации
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── api/
│   │       ├── core/
│   │       ├── models/
│   │       └── services/
│   │
│   ├── journey_service/         # Основной сервис Journey
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── api/            # API endpoints
│   │       │   └── v1/
│   │       │       ├── ideas.py
│   │       │       ├── orders.py
│   │       │       └── projects.py
│   │       │
│   │       ├── core/           # Ядро приложения
│   │       │   ├── config.py
│   │       │   └── events.py
│   │       │
│   │       ├── models/         # Модели данных
│   │       │   ├── idea.py
│   │       │   ├── order.py
│   │       │   └── project.py
│   │       │
│   │       ├── schemas/        # Pydantic схемы
│   │       │   └── journey.py
│   │       │
│   │       └── services/       # Бизнес-логика
│   │           └── journey.py
│   │
│   ├── comment_service/         # Сервис комментариев
│   │   ├── Dockerfile
│   │   └── src/
│   │
│   ├── rating_service/          # Сервис рейтингов
│   │   ├── Dockerfile
│   │   └── src/
│   │
│   └── notification_service/    # Сервис уведомлений
│       ├── Dockerfile
│       └── src/
│
├── libs/                        # Общие библиотеки
│   ├── common/                 # Общий код
│   │   ├── exceptions/
│   │   ├── models/
│   │   └── utils/
│   │
│   └── messaging/              # Библиотека для работы с Kafka
│       └── kafka_client.py
│
├── tests/                      # Тесты
│   ├── integration/           # Интеграционные тесты
│   └── unit/                 # Модульные тесты
│
├── deploy/                     # Конфигурации развертывания
│   ├── docker-compose.yml
│   ├── kubernetes/
│   │   ├── base/
│   │   └── overlays/
│   └── terraform/
│
├── docs/                       # Документация
│   ├── api/
│   ├── architecture/
│   └── development/
│
├── scripts/                    # Скрипты для разработки и деплоя
│   ├── build.sh
│   ├── test.sh
│   └── deploy.sh
│
├── .gitignore
├── README.md
├── pyproject.toml             # Poetry конфигурация
└── Makefile                   # Команды для разработки


