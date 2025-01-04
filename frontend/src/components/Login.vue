<!-- src/components/Login.vue -->
<template>
    <div class="login">
    <h1>Login</h1>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importă useRouter
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase/firebase"; 
import axios from "axios";

export default {
    name: "LoginPage",
    setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const router = useRouter(); 

    const login = async () => {
        const auth = getAuth(firebaseApp); 
        try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const token = await userCredential.user.getIdToken(); 

        const response = await axios.post("http://localhost:3000/api/auth/verify", { token });

        if (response.status === 200) {
            error.value = ""; 
            router.push("/dashboard");
        } else {
            error.value = "Failed to verify user with the server.";
        }
        } catch (err) {
        error.value = "Login failed: " + err.message; 
        }
    };

    return {
        email,
        password,
        error,
        login,
    };
    },
};
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
}
button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
p {
    color: red;
}
</style>