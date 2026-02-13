import { API_BASE_URL } from '../config/api.config';

export const fetchStudents = async () => {
    const res = await fetch(API_BASE_URL);
    return res.json();
};

export const addStudent = async (student: any) => {
    await fetch(API_BASE_URL, {
        method: 'POST',
        body: JSON.stringify(student)
    });
};

export const updateStudent = async (student: any) => {
    await fetch(API_BASE_URL, {
        method: 'PUT',
        body: JSON.stringify(student)
    });
};

export const deleteStudent = async (id: number) => {
    await fetch(`${API_BASE_URL}?id=${id}`, { method: 'DELETE' });
};