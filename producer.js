import kafka from "./client"

async function init(){

    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    })
    await producer.disconnect()

}

init();