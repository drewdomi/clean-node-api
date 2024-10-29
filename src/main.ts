import Fastify from 'fastify'

const app = Fastify()

app.get('/', (_req, reply) => {
  reply.send({ hello: 'world' })
})

app.listen({ port: 3000 }, (err, _addr) => {
  if (err) throw err
})
