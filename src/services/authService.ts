type LoginResponse = {
   token: string
   username: String
}

const BASE_URL = 'http://localhost:8080'

export const AuthService = {
   login: async (username: String, password: String): Promise<LoginResponse> => {
      try {
         const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
         })

         const loginResponse = (await response.json()) as LoginResponse
         localStorage.setItem('token', loginResponse.token)
         console.log('token: ' + loginResponse.token)
         console.log('login response: ' + loginResponse)
         return loginResponse
      } catch (error) {
         throw error
      }
   },

   register: async (username: String, password: String): Promise<LoginResponse> => {
      try {
         const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
         })

         const loginResponse = (await response.json()) as LoginResponse
         console.log('token: ' + loginResponse.token)

         return loginResponse
      } catch (error) {
         throw error
      }
   },
}
