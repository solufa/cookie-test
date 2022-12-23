import { defineComponent, useContext } from '@nuxtjs/composition-api'
import styles from './-styles.module.css'
import { useState } from '~/plugins/useState'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [res1, setRes1] = useState('')
    const [res2, setRes2] = useState('')
    const get1 = () => ctx.$api.$get().then(setRes1)
    const get2 = () => ctx.$api2.$get().then(setRes2)

    return () => (
      <div class={styles.container}>
        <div>
          <h1 class={styles.title}>cookie-test</h1>
          <button onClick={get1}>GET1</button>
          <div>res1: {res1.value}</div>
          <button onClick={get2}>GET2</button>
          <div>res2: {res2.value}</div>
        </div>
      </div>
    )
  }
})
