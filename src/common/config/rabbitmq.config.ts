export default () => ({
	rabbitmq: {
		url: process.env.RABBITMQ_URL,
		queueName: process.env.RABBITMQ_QUEUE,
	}
})
