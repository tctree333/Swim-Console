//## setup variables
int buzzer = D7;
String valRounds;
String valInterval;
int interval = -1;
int rounds = -1;
int seconds = -1;
int minutes = -1;
int remain = -1;
//## setup functions

//## set rounds function
int setRounds(String arg) {
    
    valRounds = arg;
    //Particle.publish(valRounds);
    return 1;
}

//## set interval function
int setInterval(String arg) {
    
    valInterval = arg;
    //Particle.publish(valInterval);
    return 1;
}

//## actually start doing stuff function
int start(String arg) {
    
    //## more setup stuff
    interval = valInterval.toInt();
    
    rounds = valRounds.toInt();
    //Particle.publish("rounds",String(rounds));
    
    String strMinutes = valInterval;
    minutes = strMinutes.remove(2).toInt();
    //Particle.publish("minutes", String(minutes));
    
    String strSeconds = valInterval;
    seconds = strSeconds.remove(0,2).toInt();
    //Particle.publish("seconds", String(seconds));
    
    int milliseconds = (minutes*60000)+(seconds*1000);
    //Particle.publish("milliseconds",String(milliseconds));
    
    remain = rounds;
    //## actually doing stuff
    for (int i=0; i<rounds; i++ ){
        beep();
        remain = remain-1;
        delay(milliseconds);
        
    }
    
    //## so they won't think we are ignoring them
    return 1;
    
}

//## even more setup
void setup()
{
    //## just for debugging
    //String test = "1234";
    //Particle.publish(String(test.remove(0,2).toInt()));
    
    //## set pin mode
    pinMode(buzzer, OUTPUT);
  
    //## setup cloud functions and variables
    Particle.function("rounds", setRounds);
    Particle.function("interval", setInterval);
    Particle.function("start", start);
  
    Particle.variable("roundsGET", rounds);
    Particle.variable("intervalGET", interval);
    Particle.variable("remain", remain);

    //## just for good measure
    digitalWrite(buzzer, LOW);
    
}

//## beeping function
void beep(){
    digitalWrite(buzzer, HIGH);
    delay(1000);
    digitalWrite(buzzer,LOW);
}


void loop()
{
    //## nothing to see here!
}

