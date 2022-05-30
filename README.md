# Tarea2-SD

### ¿Por qué Kafka funciona bien en este escenario?.
Para la seguridad de un login es ideal debido a los ataques de fuerza bruta que pueden llegar a ocurrir. Debido a que kafka es un sistema que opera a tiempo real se puede detectar de inmediato cuando se a intentado realizar un ataque.
### Basado en las tecnologías que usted tiene a su disposición (Kafka, backend) ¿Qué haría usted para manejar una gran cantidad de usuarios al mismo tiempo?.
Se agregaria una mayor cantiadad de consumidores como tambien una mayor cantidad de particiones en donde se repartirian la tarea de procesar los datos y ninguno se saturaria.


## Instalar
```python
docker-compose -d
```
