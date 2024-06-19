import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.28.185:9092'],
})

export default kafka;