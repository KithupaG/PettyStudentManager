# Petty Student Manager

A full stack mobile application used to manage students, built with React Native for frontend and Java + Hibernate (ORM) backend.

## 1. Project Overview

Petty Student Manager is a mobile student manager app that demonstrates the integration of:
 - **Frontend** : React Native + Typescript
 - **Backend** : Java SE + Hibernate ORM
 - **Database** : MySQL
 - **Local Storage** : AsyncStorage for offline data persistance

## 2. Features

 - Create, read, update, and delete student
 - View students in an organized list format
 - Student details with id, full name, email, and creation date
 - Local storage to store user login information
 - Clean, Simple and intuitive user interface
 - RESTful API communication using JSON
 - Offline capability with AsyncStorage caching

## Architecture

```
┌─────────────────────┐
│   React Native      │
│   (Mobile App)      │
└──────────┬──────────┘
           │ 
           ▼
┌─────────────────────┐
│   Java Backend      │
│   (Hibernate ORM)   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MySQL Database    │
└─────────────────────┘

```

## Prerequisites

**Before running this project, you have the following installed:

### For Backend:

- **Java Development Kit (JDK)** 11
  - Download from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
  - Verify installation: `java -version`
- **MySQL Server** 8.0 or higher
  - Download from [MySQL Official Site](https://dev.mysql.com/downloads/mysql/)
  - Verify installation: `mysql --version`
- **Maven** 3.9 or higher (for dependency management)
  - Download from [Maven Official Site](https://maven.apache.org/download.cgi)
  - Verify installation: `mvn -version`

### For Frontend:

- **Node.js** (v20 or higher) and npm
  - Download from [Node.js Official Site](https://nodejs.org/)
  - Verify installation: `node -v` and `npm -v`
- **React Native CLI**
  - Install globally: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
  - Download from [Android Studio](https://developer.android.com/studio)
  - Install Android SDK and set up an emulator
- **Xcode** (for iOS development - macOS only)
  - Download from Mac App Store

## Database Setup

### 1. Create MySQL Database

```sql
-- Login to MySQL
mysql -u USERNAME root -p PASSWORD

```

Replace USERNAME and PASSWORD with your username and password respectively]

### 2. Next run database.sql script

### 3. Configure Database Connection

Edit `src/main/resources/hibernate.cfg.xml`:

```xml

<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">

    
        
        com.mysql.cj.jdbc.Driver
        jdbc:mysql://localhost:3306/petty_student_manager
        root
        your_password_here
        
        
        org.hibernate.dialect.MySQL8Dialect
        
        
        true
        true
        
        
        5
        20
        
```

### 4. Install Dependencies

```bash
mvn clean install
```

### 5. Run the Backend Server

```bash
mvn exec:java -Dexec.mainClass="jiat.ws.Main"
```

The backend server should start on `http://localhost:8080`

## Frontend Setup

### 1. 1. Navigate to your Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install iOS Pods (macOS only)

```bash
cd ios
pod install
cd ..
```

## 4. Run on Android

```bash
# Start Metro bundler
npm start

# In another terminal, run Android app
npm run android
```

### 5. Run on iOS (macOS only)

```bash
# Start Metro bundler
npm start

# In another terminal, run iOS app
npm run ios
```

## Project Structure

```
petty-student-manager/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── jiat/
│   │   │   │       └── ws/
│   │   │   │           ├── Main.java
│   │   │   │           ├── model/
│   │   │   │           │   └── Student.java
│   │   │   │           ├── dao/
│   │   │   │           │   ├── studentDAO.java
│   │   │   │           │   └── studentDAOImpl.java
│   │   │   │           ├── util/
│   │   │   │           │   └── HibernateUtil.java
│   │   │   │           └── server/
│   │   │   │               ├── HttpServer.java
│   │   │   │               └── TaskHandler.java
│   │   │   └── resources/
│   │   │       └── hibernate.cfg.xml
│   ├── pom.xml
│   └── README.md
│
├── frontend/
│   ├── app/
│   │   ├── screens/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── StudentListScreen.tsx
│   │   │   └── AddStudentScreen.tsx
|   |   |   └── EditStudentScreen.tsx
│   │   ├── components/
│   │   │   ├── StudentList.tsx
│   │   │   └── StudentForm.tsx
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   └── storage.service.ts
│   │   ├── config/
│   │   │   └── api.config.ts
│   │   └── styles/
│   │       └── globalStyles.ts
│   ├── App.json
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

### 5. Run on Android

```bash
# Start Metro bundler
npm start

# In another terminal, run Android app
npm run android
```

### 6. Run on iOS (macOS only)

```bash
# Start Metro bundler
npm start

# In another terminal, run iOS app
npm run ios
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update existing student |
| DELETE | `/api/students/:id` | Delete students |

## Local Storage (AsyncStorage)

The app uses AsyncStorage for:

1. **Session Management**
   - User session data

2. **Offline Caching**
   - Cached student data for offline viewing
   - Pending changes for sync when online
  
### Backend Testing

```bash
cd backend
mvn test
```

### Frontend Testing

```bash
cd frontend
npm test
```

# Basic Troubleshooting

### Common Backend Issues

**Problem**: `ClassNotFoundException: com.mysql.cj.jdbc.Driver`

- **Solution**: Ensure MySQL connector is in `pom.xml` dependencies

**Problem**: Connection refused to MySQL

- **Solution**: Check if MySQL server is running: `sudo service mysql status`

**Problem**: Port 8080 already in use

- **Solution**: Kill existing process or change port in Main.java

### Common Frontend Issues

**Problem**: Unable to connect to backend from Android emulator

- **Solution**: Use `10.0.2.2` instead of `localhost` in API config

**Problem**: Metro bundler port conflict

- **Solution**: Kill existing Metro: `npx react-native start --reset-cache`

**Problem**: iOS build fails

- **Solution**: Clean build folder: `cd ios && xcodebuild clean && cd ..`

## Dependencies

### Backend Dependencies (pom.xml)

```xml


    org.hibernate
    hibernate-core
    5.6.15.Final

    mysql
    mysql-connector-java
    8.0.33

    com.google.code.gson
    gson
    2.10.1

```

### Frontend Dependencies (package.json)

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-native": "0.81.5",
    "@react-native-async-storage/async-storage": "^2.2.0",
    "@react-navigation/native": "^7.1.8",
  },
  "devDependencies": {
    "@types/react": "^19.1.0",
    "@types/react-native": "^0.81.5",
    "typescript": "~5.9.2"
  }
}
```

## Application Standards

- TypeScript for type safety
- Functional components with React Hooks
- Hardcoded styles using StyleSheet
- Consistent naming conventions (camelCase for variables, PascalCase for components)
- Comments on complex logic
- Proper error handling
- Clean folder structure

# License

This project is created for educational purposes as part of a Software Engineering course.

## Contributors

- [Kithupa Gajanayake](https://github.com/KithupaG) - Initial development

## Acknowledgments

- React Native Documentation
- Hibernate ORM Documentation
- MySQL Documentation
- React Native Community

---

**Note**: Replace placeholder values (passwords, IPs, names) with your actual configuration before running the project.

For issues or questions, please open an issue in the GitHub repository.