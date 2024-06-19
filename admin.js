import kafka from "./client.js";

async function init(){
    const admin = kafka.admin()
    console.log('Connecting...')

    await admin.connect()
    console.log('Connected!')


    await admin.createTopics({
        topics: [
            { topic: 'test-topic', numPartitions: 2 }
        ]
    })

    console.log('Topic created successfully!')
    await admin.disconnect()
}

init();