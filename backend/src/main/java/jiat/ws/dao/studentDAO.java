package jiat.ws.dao;

import jiat.ws.model.Student;

import java.util.List;

public interface studentDAO {
    List<Student> getAllStudents();
    void saveStudent(Student student);
    void updateStudent(Student student);
    void deleteStudent(int id);
}
