import moment from 'moment'

moment.relativeTimeThreshold('ss', 0)
moment.relativeTimeThreshold('h', 24)

export default (format) => {
	const nowDate = new Date().getTime()
	const dateDiff = nowDate - new Date(format).getTime()

	const nowYear = new Date().getFullYear()
	const diffYear = new Date(format).getFullYear()

	const minute = 60 * 1000
	const hour = 60 * minute
	const day = 24 * hour
	const week = 7 * day

	if (dateDiff < day) {
		// console.log('under a day')
		return moment(format).fromNow()
	} else if (dateDiff > day && dateDiff < week) {
		// console.log('more than a day but less than a week')
		return moment(format).calendar()
	} else if (dateDiff > week) {
		// console.log('more than a week')
		if (diffYear === nowYear) {
			// console.log('on the same year')
			return moment(format).format('DD MMMM')
		} else {
			// console.log('on the different year')
			return moment(format).format('DD MMMM, YYYY')
		}
	} else {
		// console.log('fallback')
		return moment(format).format('DD MMMM, YYYY')
	}
}
