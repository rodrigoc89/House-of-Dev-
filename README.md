# House-of-Dev-

Inicializar el proyecto

- Crear la base de datos usando psql : CREATE DATABASE houseOfDev
- Instalar las dependencias en el front y en el back : npm i
- Levantar el Back : npm run serv
- Hacer el seed de la base de datos : node seed.js (carga todas las propiedades y crea un el usuario Super Admin)
- Levantar el Front : npm run dev

Vista del Usuario

Un usuario que visite por privera vez el sitio web puede ver los detalles de las propiedades , buscar y filtrar las propiedades sin necesidad de estar logeado, el estar logeado se requiere solo para poder pedir una cita de la propiedad que quiere visitar.

Podrá ver la vista individual de una propiedad donde se muestra la información mas detallada de la misma

Puede acceder a las notificaciones donde visualizara los msj que que le envió un administrador

En el Registro de un nuevo usuario debe ingresar su correo electrónico, nombre y apellido, teléfono y una contraseña que no sea menor a 8 dígitos use mayúsculas, minúsculas números y símbolos para hacer mas segura la misma.

Pedir una cita el usuario el usuario tiene que estar previamente goleado para poder acceder al la vista donde podrá agendar el día y la hora a través de un calendario.

Agregar a favoritos el usuario podrá agregar a su lista de favoritos las propiedades que sean de su interés siempre y cuando este logeado así mismo podrá visualizar su lista y podrá retirar de las misma las propiedades que ya no le interese usando el mismo botón con el que las agrego, el botón cambiara de color según el estado, Rojo cuando este ya agregado a favoritos y gris cuando no lo esta.

El usuario podrá buscar a través de un buscador escribiendo una direccional o tipo de vivienda casa o departamento, también cuenta con un filtro de botones los cuales muestran las propiedades según su estado de alquiler o venta, también podrá ver la lista de propiedades disponibles con un orden de menor a mayor de los precios y al revés.

Panel del ADMIN

Para logearse como usuario súper admin debe ingresar con el siguiente correo admin@admin.com e ingresar la siguiente contraseña : "352Admin\*" .

El usuario admin podrá modificar, dar de alta y baja una propiedad. Puede crear una propiedad nueva ingresando los datos detallados en el formulario de creación, también puede podrá modificar los datos de una propiedad ya existente y así mismo eliminar una sin antes aceptar el msj de confirmación. También puede dar de alta a un usuario común como admin para que pueda realizar las tareas de un administrador

En el panel también podrá ver las citas que se generaron de las propiedades, mostrando los datos de quien solicita la cita y así mismo poder mandarle un msj al usuario a través de un chat

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
