import { defineComponent, useContext } from '@nuxtjs/composition-api'
import styles from './-styles.module.css'
import { useState } from '~/plugins/useState'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [id, setId] = useState('')
    const [res, setRes] = useState('')
    const fetchMe = async () => {
      const res = await ctx.$api2.me.$get()
      setRes(res.status === 'login' ? `success: ID=${res.id}` : 'logout')
    }
    const post = async (removeCredentials: boolean) => {
      setRes('')
      try {
        await ctx.$api.session.$post({
          body: { id: id.value, removeCredentials }
        })
        await fetchMe()
      } catch (e) {
        setRes('Failure')
      }
    }

    return () => (
      <div class={styles.container}>
        <div>
          <h1 class={styles.title}>cookie-test</h1>
          <input
            type="text"
            placeholder="ID"
            value={id.value}
            onInput={(e) =>
              e.target instanceof HTMLInputElement && setId(e.target.value)
            }
          />
          <div>
            <button onClick={() => post(true)}>removeCredentials=true</button>
          </div>
          <div>
            <button onClick={() => post(false)}>removeCredentials=false</button>
          </div>
          <div>res: {res.value}</div>
        </div>
      </div>
    )
  }
})
