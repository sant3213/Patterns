class Player {
    private health: number;
    private speed: number;

    setHealth(health: number) {
        if(health < 0) {
            console.log("You can´t set the health below 0");
            return;
        }
        this.health = health;
    }

    getHealth() {
        return this.health;
    }

    setSpeed(health: number) {
        this.health = health;
    }

    getSpeed() {
        return this.health;
    }
}

const mario = new Player();
mario.setHealth(10);
mario.setSpeed(10);
mario.getSpeed(); //10
//mario.speed is not accesible because it is private.