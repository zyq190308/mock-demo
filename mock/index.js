import Mock from 'mockjs'
import categary from './js/categary'

Mock.mock('/test', require('./json/test.json'))
Mock.mock('/mock', require('./json/mock.json'))
Mock.mock('/categary', categary)