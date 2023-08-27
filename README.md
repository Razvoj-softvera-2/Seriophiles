# Social network for the lovers of tv-shows



## Docker compose

Run this command from a root directory of the project

```bash
  docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d --build
```

```bash
  docker-compose build --no-cache      
```


### To delete all containers, iamges and volumes (All not just project related)
```bash
docker system prune --all --volumes
```
    
