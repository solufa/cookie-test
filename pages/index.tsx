import { defineComponent, useContext } from '@nuxtjs/composition-api'
import styles from './-styles.module.css'
import { useState } from '~/plugins/useState'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [id, setId] = useState('')
    const [res, setRes] = useState('')
    const reset = async () => {
      setRes('')
      await ctx.$api.session_delete.$delete()
    }
    const fetchMe = async () => {
      const res = await ctx.$api2.me.$get().catch(() => null)
      setRes(
        !res
          ? 'Failure'
          : res.status === 'login'
          ? `success: ID=${res.id}`
          : 'logout'
      )
    }
    const postNone = async () => {
      await reset()
      await ctx.$api.session_samesite_none.$post({ body: { id: id.value } })
      await fetchMe()
    }
    const postUndefined = async () => {
      await reset()
      await ctx.$api.session_samesite_undefined.$post({
        body: { id: id.value }
      })
      await fetchMe()
    }
    const postLax = async () => {
      await reset()
      await ctx.$api.session_samesite_lax.$post({
        body: { id: id.value }
      })
      await fetchMe()
    }
    const postStrict = async () => {
      await reset()
      await ctx.$api.session_samesite_strict.$post({
        body: { id: id.value }
      })
      await fetchMe()
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
          {[
            { samesite: 'undefined', onClick: postUndefined },
            { samesite: 'None', onClick: postNone },
            { samesite: 'Lax', onClick: postLax },
            { samesite: 'Strict', onClick: postStrict }
          ].map((vals) => (
            <div key={vals.samesite}>
              <button onClick={vals.onClick}>Samesite={vals.samesite}</button>
            </div>
          ))}
          <div>res: {res.value}</div>
        </div>
      </div>
    )
  }
})
