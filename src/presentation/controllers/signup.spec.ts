import { describe, expect, test } from 'vitest'

import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController()

    const httpReq = {
      body: {
        email: 'email@example.com',
        password: 'any_password'
      }
    }

    const httpRes = sut.handle(httpReq)

    expect(httpRes.statusCode).toBe(400)
  })
})
