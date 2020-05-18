(
    function() {
        'use strict';
        let bicyclePrototype;
        let mountainBikePrototype;

        let createBicyclePrototye = function() {

            return {
                speed: 0,
                applyBrake: function(speed) {
                    this.speed -= speed;
                },
                speedup: function(speed) {
                    this.speed += speed;
                }
            };
        };

        let createMountainBikeProtoype = function(prototype) {

            const obj = Object.create(prototype);
            obj.gear = 1;
            obj.setGear = function(gear) {
                this.gear = gear;
            };

            return obj;
        };

        let start = function() {
            bicyclePrototype = createBicyclePrototye();
            mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
            let bike = Object.create(bicyclePrototype);
            bike.setGear(2);
            console.log(bike.gear);
        };

        start();


    }
)();