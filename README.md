## Environment Variables

Create a `.env` file in the root of your project and define the following variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=todo_app
PORT=5000
```

---

## API Documentation (Swagger)

### 1. Create User (POST /user)

**Description:** Create a new user account.
![Screenshot_2025-05-06_232752](https://github.com/user-attachments/assets/7af34487-4300-4271-b637-53dc5cc63cf9)


### 2. Add Todo (POST /addtodo)

**Description:** Create a new todo item.
![Screenshot_2025-05-06_232807](https://github.com/user-attachments/assets/4de6e5db-9a1f-4858-9522-d8198f7371a5)


### 3. Get Users (GET /user)

**Description:** Retrieve a list of all users.
![Screenshot_2025-05-06_232851](https://github.com/user-attachments/assets/e05cf2eb-2524-4260-b656-368be252fcd4)


### 4. Get Todos (GET /addtodo)

**Description:** Retrieve a list of all todo items.
![Screenshot_2025-05-06_232833](https://github.com/user-attachments/assets/f05b3a68-28f8-4333-8f86-bab8847e75e1)


---

## Database Inspection (SQL)

After making a `POST` request, you can inspect the database tables using the following SQL query:

```sql
SELECT * FROM users;
SELECT * FROM todos;
```

