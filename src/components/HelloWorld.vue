<template>
  <v-card color="#142c6c">
   
    <v-row justify="center" align="center" >
      <v-col cols="12" sm="8" md="4">
       
        <v-card class="login-container">
          <v-row justify="center" align="center">
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <v-img src="../assets/uaa.png" contain width="600"></v-img>
    </v-row>
   
          <v-card-title class="justify-center">
           
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="username"
                label="Usuario"
                prepend-inner-icon="mdi-account"
                outlined
                dense
                rounded
                :rules="usernameRules"
                 variant="solo-filled"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                prepend-inner-icon="mdi-lock"
                type="password"
                outlined
                dense
                rounded
                :rules="passwordRules"
                variant="solo-filled"
                required
              ></v-text-field>
              <v-btn
                color="primary"
                block
                rounded
                 size="x-large"
                @click="submit"
              >
                Entrar
              </v-btn>
              <br>
              <v-btn  color="white" variant="outlined" size="x-large" text block rounded @click="recoverPassword">
                Recuperar Contraseña
              </v-btn>
              <br><br><br><br><br><br><br><br>
              <label class="contact-info">Consultas | Telefono : 02257-429300/420338 |</label>
              <label class="contact-info">Correo : plataforma.solicitudes@atlantida.edu.ar</label>
              <label class="contact-info">Éste sitio ha sido desarrollado y comprobado para utilizarlo en el navegador</label>
              <label class="contact-info">Google Chrome.</label>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      valid: false,
      usernameRules: [
        v => !!v || 'El usuario es requerido',
        v => v.length >= 3 || 'El usuario debe tener al menos 3 caracteres'
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Lógica para iniciar sesión
        console.log('Usuario:', this.username, 'Contraseña:', this.password);
      }
    },
    recoverPassword() {
      // Lógica para recuperar contraseña
      console.log('Recuperar contraseña');
    }
  }
}
</script>

<style scoped>
.login-container {
  background-color:#142c6c ;
  height: 100vh;
}
.custom-input .v-input__control {
  background-color: #e7eaeb !important; /* Color de fondo */
  border-radius: 25px; /* Bordes redondeados */
}

.custom-input .v-label {
  color: #00796b !important; /* Cambia el color de la etiqueta */
}

.custom-input input {
  color: #bececb !important; /* Cambia el color del texto */
}

.custom-input .v-input__control::before,
.custom-input .v-input__control::after {
  border-color: #ee0909 !important; /* Color del borde */
}
.contact-info {
  color: white;
  text-align: center;
  display: block; /* Asegura que el label se comporte como un elemento de bloque para centrado */
  margin: 0 auto; /* Opcional, para centrar en relación al contenedor */
}
</style>
