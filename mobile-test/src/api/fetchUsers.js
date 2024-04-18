import axiosInstance from './axios'

export const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('admin/users');
      return response.data; 
    } catch (error) {
      throw new Error('Failed to fetch users: ' + error.message);
    }
};