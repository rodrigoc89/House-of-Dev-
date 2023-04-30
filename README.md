# House-of-Dev-

Inicializar el proyecto

- Crear la base de datos usando psql : CREATE DATABASE houseOfDev
- Instalar las dependencias en el front y en el back : npm i
- Levantar el Back : npm run serv
- Hacer el seed de la base de datos : node seed.js (carga todas las propiedades y crea un el usuario Super Admin)
- Levantar el Front : npm run dev

Vista del Usuario

Un usuario que visite por privera vez el sitio web puede ver los detalles de las propiedades , buscar y filtrar las propiedades sin necesidad de estar logeado, el estar logeado se requiere solo para poder pedir una cita de la propiedad que quiere visitar.
![Login](https://i.postimg.cc/fLXB3ydK/Captura-desde-2023-04-13-17-59-22.png)
![Perfil](https://i.postimg.cc/CxLPvFyh/Captura-desde-2023-04-13-17-59-04.png)

Podrá ver la vista individual de una propiedad donde se muestra la información mas detallada de la misma

![Vista Individual](https://i.postimg.cc/7LjKY05h/Captura-desde-2023-04-13-17-54-50.png)

Puede acceder a las notificaciones donde visualizara los msj que que le envió un administrador
![Mensajes](https://i.postimg.cc/02vHwYcJ/Captura-desde-2023-04-13-18-03-32.png)
En el Registro de un nuevo usuario debe ingresar su correo electrónico, nombre y apellido, teléfono y una contraseña que no sea menor a 8 dígitos use mayúsculas, minúsculas números y símbolos para hacer mas segura la misma.
![Register](https://i.postimg.cc/qqTQ2rXd/Captura-desde-2023-04-13-17-58-49.png)

Pedir una cita el usuario el usuario tiene que estar previamente goleado para poder acceder al la vista donde podrá agendar el día y la hora a través de un calendario.
![Pedir una cita](https://i.postimg.cc/YSvXHbqT/Captura-desde-2023-04-13-17-59-11.png)

Agregar a favoritos el usuario podrá agregar a su lista de favoritos las propiedades que sean de su interés siempre y cuando este logeado así mismo podrá visualizar su lista y podrá retirar de las misma las propiedades que ya no le interese usando el mismo botón con el que las agrego, el botón cambiara de color según el estado, Rojo cuando este ya agregado a favoritos y gris cuando no lo esta.
![Favoritos](https://i.postimg.cc/Jz6Tv9mb/Captura-desde-2023-04-13-17-58-39.png)

El usuario podrá buscar a través de un buscador escribiendo una direccional o tipo de vivienda casa o departamento, también cuenta con un filtro de botones los cuales muestran las propiedades según su estado de alquiler o venta, también podrá ver la lista de propiedades disponibles con un orden de menor a mayor de los precios y al revés.

Panel del ADMIN
![AMB ADMIN](https://i.postimg.cc/SKPv2Hvy/Captura-desde-2023-04-13-17-59-53.png)

Para logearse como usuario súper admin debe ingresar con el siguiente correo admin@admin.com e ingresar la siguiente contraseña : "352Admin\*" .

El usuario admin podrá modificar, dar de alta y baja una propiedad. Puede crear una propiedad nueva ingresando los datos detallados en el formulario de creación, también puede podrá modificar los datos de una propiedad ya existente y así mismo eliminar una sin antes aceptar el msj de confirmación. También puede dar de alta a un usuario común como admin para que pueda realizar las tareas de un administrador

![Crear propiedad](https://i.postimg.cc/QtWnpS2c/Captura-desde-2023-04-13-18-00-41.png)
![Editar propiedad](https://i.postimg.cc/3NXSqNJR/Captura-desde-2023-04-13-18-00-31.png)
![Editar Usuario](https://i.postimg.cc/c1wbC9MS/Captura-desde-2023-04-13-18-00-16.png)
![Favoritos de un usuario](https://i.postimg.cc/SNG17nv1/Captura-desde-2023-04-13-18-00-09.png)

En el panel también podrá ver las citas que se generaron de las propiedades, mostrando los datos de quien solicita la cita y así mismo poder mandarle un msj al usuario a través de un chat
![citas](https://i.postimg.cc/25yt5CTc/Captura-desde-2023-04-13-18-02-59.png)

Para realizar este proyecto utilizamos las siguientes tecnologías:

- postgres
- nodejs
- sequelize
- reactjs
- redux

En este proyecto participamos:

- Alex Duran
- Cristian Blanco
- Rodrigo Castellanos
