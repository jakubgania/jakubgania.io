import Vue from 'vue'
import Vuex from 'vuex'
import AxiosDefaultUrl from './axios-set-base-url'

AxiosDefaultUrl.setBaseUrl()

Vue.use(Vuex)
