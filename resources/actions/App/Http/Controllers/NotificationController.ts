import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
const index63ca617bad575304d9a46c7bd2661780 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'get',
})

index63ca617bad575304d9a46c7bd2661780.definition = {
    methods: ["get","head"],
    url: '/api/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
index63ca617bad575304d9a46c7bd2661780.url = (options?: RouteQueryOptions) => {
    return index63ca617bad575304d9a46c7bd2661780.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
index63ca617bad575304d9a46c7bd2661780.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
index63ca617bad575304d9a46c7bd2661780.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
const index63ca617bad575304d9a46c7bd2661780Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
index63ca617bad575304d9a46c7bd2661780Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/api/notifications'
*/
index63ca617bad575304d9a46c7bd2661780Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index63ca617bad575304d9a46c7bd2661780.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index63ca617bad575304d9a46c7bd2661780.form = index63ca617bad575304d9a46c7bd2661780Form
/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
const indexc00ddb0dac6fd0987a2fc128be2c335e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'get',
})

indexc00ddb0dac6fd0987a2fc128be2c335e.definition = {
    methods: ["get","head"],
    url: '/notifications/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
indexc00ddb0dac6fd0987a2fc128be2c335e.url = (options?: RouteQueryOptions) => {
    return indexc00ddb0dac6fd0987a2fc128be2c335e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
indexc00ddb0dac6fd0987a2fc128be2c335e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
indexc00ddb0dac6fd0987a2fc128be2c335e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
const indexc00ddb0dac6fd0987a2fc128be2c335eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
indexc00ddb0dac6fd0987a2fc128be2c335eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::index
* @see app/Http/Controllers/NotificationController.php:12
* @route '/notifications/api'
*/
indexc00ddb0dac6fd0987a2fc128be2c335eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc00ddb0dac6fd0987a2fc128be2c335e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc00ddb0dac6fd0987a2fc128be2c335e.form = indexc00ddb0dac6fd0987a2fc128be2c335eForm

export const index = {
    '/api/notifications': index63ca617bad575304d9a46c7bd2661780,
    '/notifications/api': indexc00ddb0dac6fd0987a2fc128be2c335e,
}

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
const unread7e05838d4e37b2c238ced1c9565e186c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread7e05838d4e37b2c238ced1c9565e186c.url(options),
    method: 'get',
})

unread7e05838d4e37b2c238ced1c9565e186c.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unread',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
unread7e05838d4e37b2c238ced1c9565e186c.url = (options?: RouteQueryOptions) => {
    return unread7e05838d4e37b2c238ced1c9565e186c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
unread7e05838d4e37b2c238ced1c9565e186c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread7e05838d4e37b2c238ced1c9565e186c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
unread7e05838d4e37b2c238ced1c9565e186c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unread7e05838d4e37b2c238ced1c9565e186c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
const unread7e05838d4e37b2c238ced1c9565e186cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread7e05838d4e37b2c238ced1c9565e186c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
unread7e05838d4e37b2c238ced1c9565e186cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread7e05838d4e37b2c238ced1c9565e186c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/api/notifications/unread'
*/
unread7e05838d4e37b2c238ced1c9565e186cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread7e05838d4e37b2c238ced1c9565e186c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

unread7e05838d4e37b2c238ced1c9565e186c.form = unread7e05838d4e37b2c238ced1c9565e186cForm
/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
const unread698f73039a9214de04543c797a68aab9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread698f73039a9214de04543c797a68aab9.url(options),
    method: 'get',
})

unread698f73039a9214de04543c797a68aab9.definition = {
    methods: ["get","head"],
    url: '/notifications/api/unread',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
unread698f73039a9214de04543c797a68aab9.url = (options?: RouteQueryOptions) => {
    return unread698f73039a9214de04543c797a68aab9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
unread698f73039a9214de04543c797a68aab9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread698f73039a9214de04543c797a68aab9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
unread698f73039a9214de04543c797a68aab9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unread698f73039a9214de04543c797a68aab9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
const unread698f73039a9214de04543c797a68aab9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread698f73039a9214de04543c797a68aab9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
unread698f73039a9214de04543c797a68aab9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread698f73039a9214de04543c797a68aab9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::unread
* @see app/Http/Controllers/NotificationController.php:28
* @route '/notifications/api/unread'
*/
unread698f73039a9214de04543c797a68aab9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unread698f73039a9214de04543c797a68aab9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

unread698f73039a9214de04543c797a68aab9.form = unread698f73039a9214de04543c797a68aab9Form

export const unread = {
    '/api/notifications/unread': unread7e05838d4e37b2c238ced1c9565e186c,
    '/notifications/api/unread': unread698f73039a9214de04543c797a68aab9,
}

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
const upcoming75aadedcb6f74f97def516b3cf38e7e8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upcoming75aadedcb6f74f97def516b3cf38e7e8.url(options),
    method: 'get',
})

upcoming75aadedcb6f74f97def516b3cf38e7e8.definition = {
    methods: ["get","head"],
    url: '/api/notifications/upcoming',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
upcoming75aadedcb6f74f97def516b3cf38e7e8.url = (options?: RouteQueryOptions) => {
    return upcoming75aadedcb6f74f97def516b3cf38e7e8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
upcoming75aadedcb6f74f97def516b3cf38e7e8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upcoming75aadedcb6f74f97def516b3cf38e7e8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
upcoming75aadedcb6f74f97def516b3cf38e7e8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: upcoming75aadedcb6f74f97def516b3cf38e7e8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
const upcoming75aadedcb6f74f97def516b3cf38e7e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcoming75aadedcb6f74f97def516b3cf38e7e8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
upcoming75aadedcb6f74f97def516b3cf38e7e8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcoming75aadedcb6f74f97def516b3cf38e7e8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/api/notifications/upcoming'
*/
upcoming75aadedcb6f74f97def516b3cf38e7e8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcoming75aadedcb6f74f97def516b3cf38e7e8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

upcoming75aadedcb6f74f97def516b3cf38e7e8.form = upcoming75aadedcb6f74f97def516b3cf38e7e8Form
/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
const upcomingefb07eaf14c2bd20d5755291f3b987cc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upcomingefb07eaf14c2bd20d5755291f3b987cc.url(options),
    method: 'get',
})

upcomingefb07eaf14c2bd20d5755291f3b987cc.definition = {
    methods: ["get","head"],
    url: '/notifications/api/upcoming',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
upcomingefb07eaf14c2bd20d5755291f3b987cc.url = (options?: RouteQueryOptions) => {
    return upcomingefb07eaf14c2bd20d5755291f3b987cc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
upcomingefb07eaf14c2bd20d5755291f3b987cc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upcomingefb07eaf14c2bd20d5755291f3b987cc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
upcomingefb07eaf14c2bd20d5755291f3b987cc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: upcomingefb07eaf14c2bd20d5755291f3b987cc.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
const upcomingefb07eaf14c2bd20d5755291f3b987ccForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcomingefb07eaf14c2bd20d5755291f3b987cc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
upcomingefb07eaf14c2bd20d5755291f3b987ccForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcomingefb07eaf14c2bd20d5755291f3b987cc.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::upcoming
* @see app/Http/Controllers/NotificationController.php:48
* @route '/notifications/api/upcoming'
*/
upcomingefb07eaf14c2bd20d5755291f3b987ccForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: upcomingefb07eaf14c2bd20d5755291f3b987cc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

upcomingefb07eaf14c2bd20d5755291f3b987cc.form = upcomingefb07eaf14c2bd20d5755291f3b987ccForm

export const upcoming = {
    '/api/notifications/upcoming': upcoming75aadedcb6f74f97def516b3cf38e7e8,
    '/notifications/api/upcoming': upcomingefb07eaf14c2bd20d5755291f3b987cc,
}

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
const history2aba7471e96e22cb5851542bc842e1b1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history2aba7471e96e22cb5851542bc842e1b1.url(options),
    method: 'get',
})

history2aba7471e96e22cb5851542bc842e1b1.definition = {
    methods: ["get","head"],
    url: '/api/notifications/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
history2aba7471e96e22cb5851542bc842e1b1.url = (options?: RouteQueryOptions) => {
    return history2aba7471e96e22cb5851542bc842e1b1.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
history2aba7471e96e22cb5851542bc842e1b1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history2aba7471e96e22cb5851542bc842e1b1.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
history2aba7471e96e22cb5851542bc842e1b1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history2aba7471e96e22cb5851542bc842e1b1.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
const history2aba7471e96e22cb5851542bc842e1b1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history2aba7471e96e22cb5851542bc842e1b1.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
history2aba7471e96e22cb5851542bc842e1b1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history2aba7471e96e22cb5851542bc842e1b1.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/api/notifications/history'
*/
history2aba7471e96e22cb5851542bc842e1b1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history2aba7471e96e22cb5851542bc842e1b1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history2aba7471e96e22cb5851542bc842e1b1.form = history2aba7471e96e22cb5851542bc842e1b1Form
/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
const history3027caaa1a4ac6090a4c1b112ad64158 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history3027caaa1a4ac6090a4c1b112ad64158.url(options),
    method: 'get',
})

history3027caaa1a4ac6090a4c1b112ad64158.definition = {
    methods: ["get","head"],
    url: '/notifications/api/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
history3027caaa1a4ac6090a4c1b112ad64158.url = (options?: RouteQueryOptions) => {
    return history3027caaa1a4ac6090a4c1b112ad64158.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
history3027caaa1a4ac6090a4c1b112ad64158.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history3027caaa1a4ac6090a4c1b112ad64158.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
history3027caaa1a4ac6090a4c1b112ad64158.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history3027caaa1a4ac6090a4c1b112ad64158.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
const history3027caaa1a4ac6090a4c1b112ad64158Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history3027caaa1a4ac6090a4c1b112ad64158.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
history3027caaa1a4ac6090a4c1b112ad64158Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history3027caaa1a4ac6090a4c1b112ad64158.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::history
* @see app/Http/Controllers/NotificationController.php:164
* @route '/notifications/api/history'
*/
history3027caaa1a4ac6090a4c1b112ad64158Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history3027caaa1a4ac6090a4c1b112ad64158.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history3027caaa1a4ac6090a4c1b112ad64158.form = history3027caaa1a4ac6090a4c1b112ad64158Form

export const history = {
    '/api/notifications/history': history2aba7471e96e22cb5851542bc842e1b1,
    '/notifications/api/history': history3027caaa1a4ac6090a4c1b112ad64158,
}

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
const checkPendingef4f67e517c096537d7a688e3e1f840a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkPendingef4f67e517c096537d7a688e3e1f840a.url(options),
    method: 'get',
})

checkPendingef4f67e517c096537d7a688e3e1f840a.definition = {
    methods: ["get","head"],
    url: '/api/notifications/check-pending',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
checkPendingef4f67e517c096537d7a688e3e1f840a.url = (options?: RouteQueryOptions) => {
    return checkPendingef4f67e517c096537d7a688e3e1f840a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
checkPendingef4f67e517c096537d7a688e3e1f840a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkPendingef4f67e517c096537d7a688e3e1f840a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
checkPendingef4f67e517c096537d7a688e3e1f840a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkPendingef4f67e517c096537d7a688e3e1f840a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
const checkPendingef4f67e517c096537d7a688e3e1f840aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingef4f67e517c096537d7a688e3e1f840a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
checkPendingef4f67e517c096537d7a688e3e1f840aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingef4f67e517c096537d7a688e3e1f840a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/api/notifications/check-pending'
*/
checkPendingef4f67e517c096537d7a688e3e1f840aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingef4f67e517c096537d7a688e3e1f840a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checkPendingef4f67e517c096537d7a688e3e1f840a.form = checkPendingef4f67e517c096537d7a688e3e1f840aForm
/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
const checkPendingccd64b0b8c873c07d2bfd4b6c36def73 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url(options),
    method: 'get',
})

checkPendingccd64b0b8c873c07d2bfd4b6c36def73.definition = {
    methods: ["get","head"],
    url: '/notifications/api/check-pending',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url = (options?: RouteQueryOptions) => {
    return checkPendingccd64b0b8c873c07d2bfd4b6c36def73.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
checkPendingccd64b0b8c873c07d2bfd4b6c36def73.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
checkPendingccd64b0b8c873c07d2bfd4b6c36def73.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
const checkPendingccd64b0b8c873c07d2bfd4b6c36def73Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
checkPendingccd64b0b8c873c07d2bfd4b6c36def73Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::checkPending
* @see app/Http/Controllers/NotificationController.php:180
* @route '/notifications/api/check-pending'
*/
checkPendingccd64b0b8c873c07d2bfd4b6c36def73Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkPendingccd64b0b8c873c07d2bfd4b6c36def73.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checkPendingccd64b0b8c873c07d2bfd4b6c36def73.form = checkPendingccd64b0b8c873c07d2bfd4b6c36def73Form

export const checkPending = {
    '/api/notifications/check-pending': checkPendingef4f67e517c096537d7a688e3e1f840a,
    '/notifications/api/check-pending': checkPendingccd64b0b8c873c07d2bfd4b6c36def73,
}

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/api/notifications'
*/
const store63ca617bad575304d9a46c7bd2661780 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'post',
})

store63ca617bad575304d9a46c7bd2661780.definition = {
    methods: ["post"],
    url: '/api/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/api/notifications'
*/
store63ca617bad575304d9a46c7bd2661780.url = (options?: RouteQueryOptions) => {
    return store63ca617bad575304d9a46c7bd2661780.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/api/notifications'
*/
store63ca617bad575304d9a46c7bd2661780.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/api/notifications'
*/
const store63ca617bad575304d9a46c7bd2661780Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/api/notifications'
*/
store63ca617bad575304d9a46c7bd2661780Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store63ca617bad575304d9a46c7bd2661780.url(options),
    method: 'post',
})

store63ca617bad575304d9a46c7bd2661780.form = store63ca617bad575304d9a46c7bd2661780Form
/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/notifications/api'
*/
const storec00ddb0dac6fd0987a2fc128be2c335e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'post',
})

storec00ddb0dac6fd0987a2fc128be2c335e.definition = {
    methods: ["post"],
    url: '/notifications/api',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/notifications/api'
*/
storec00ddb0dac6fd0987a2fc128be2c335e.url = (options?: RouteQueryOptions) => {
    return storec00ddb0dac6fd0987a2fc128be2c335e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/notifications/api'
*/
storec00ddb0dac6fd0987a2fc128be2c335e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/notifications/api'
*/
const storec00ddb0dac6fd0987a2fc128be2c335eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::store
* @see app/Http/Controllers/NotificationController.php:65
* @route '/notifications/api'
*/
storec00ddb0dac6fd0987a2fc128be2c335eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec00ddb0dac6fd0987a2fc128be2c335e.url(options),
    method: 'post',
})

storec00ddb0dac6fd0987a2fc128be2c335e.form = storec00ddb0dac6fd0987a2fc128be2c335eForm

export const store = {
    '/api/notifications': store63ca617bad575304d9a46c7bd2661780,
    '/notifications/api': storec00ddb0dac6fd0987a2fc128be2c335e,
}

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/api/notifications/{notification}'
*/
const update5c007ef53daf5bdcfe74895ee384d9e2 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5c007ef53daf5bdcfe74895ee384d9e2.url(args, options),
    method: 'put',
})

update5c007ef53daf5bdcfe74895ee384d9e2.definition = {
    methods: ["put"],
    url: '/api/notifications/{notification}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/api/notifications/{notification}'
*/
update5c007ef53daf5bdcfe74895ee384d9e2.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return update5c007ef53daf5bdcfe74895ee384d9e2.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/api/notifications/{notification}'
*/
update5c007ef53daf5bdcfe74895ee384d9e2.put = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5c007ef53daf5bdcfe74895ee384d9e2.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/api/notifications/{notification}'
*/
const update5c007ef53daf5bdcfe74895ee384d9e2Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update5c007ef53daf5bdcfe74895ee384d9e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/api/notifications/{notification}'
*/
update5c007ef53daf5bdcfe74895ee384d9e2Form.put = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update5c007ef53daf5bdcfe74895ee384d9e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update5c007ef53daf5bdcfe74895ee384d9e2.form = update5c007ef53daf5bdcfe74895ee384d9e2Form
/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/notifications/api/{notification}'
*/
const updateebe6b46e30ede18860e267fd5755db6e = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateebe6b46e30ede18860e267fd5755db6e.url(args, options),
    method: 'put',
})

updateebe6b46e30ede18860e267fd5755db6e.definition = {
    methods: ["put"],
    url: '/notifications/api/{notification}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/notifications/api/{notification}'
*/
updateebe6b46e30ede18860e267fd5755db6e.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return updateebe6b46e30ede18860e267fd5755db6e.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/notifications/api/{notification}'
*/
updateebe6b46e30ede18860e267fd5755db6e.put = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateebe6b46e30ede18860e267fd5755db6e.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/notifications/api/{notification}'
*/
const updateebe6b46e30ede18860e267fd5755db6eForm = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateebe6b46e30ede18860e267fd5755db6e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::update
* @see app/Http/Controllers/NotificationController.php:87
* @route '/notifications/api/{notification}'
*/
updateebe6b46e30ede18860e267fd5755db6eForm.put = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateebe6b46e30ede18860e267fd5755db6e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateebe6b46e30ede18860e267fd5755db6e.form = updateebe6b46e30ede18860e267fd5755db6eForm

export const update = {
    '/api/notifications/{notification}': update5c007ef53daf5bdcfe74895ee384d9e2,
    '/notifications/api/{notification}': updateebe6b46e30ede18860e267fd5755db6e,
}

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/api/notifications/{notification}'
*/
const destroy5c007ef53daf5bdcfe74895ee384d9e2 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5c007ef53daf5bdcfe74895ee384d9e2.url(args, options),
    method: 'delete',
})

destroy5c007ef53daf5bdcfe74895ee384d9e2.definition = {
    methods: ["delete"],
    url: '/api/notifications/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/api/notifications/{notification}'
*/
destroy5c007ef53daf5bdcfe74895ee384d9e2.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return destroy5c007ef53daf5bdcfe74895ee384d9e2.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/api/notifications/{notification}'
*/
destroy5c007ef53daf5bdcfe74895ee384d9e2.delete = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5c007ef53daf5bdcfe74895ee384d9e2.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/api/notifications/{notification}'
*/
const destroy5c007ef53daf5bdcfe74895ee384d9e2Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy5c007ef53daf5bdcfe74895ee384d9e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/api/notifications/{notification}'
*/
destroy5c007ef53daf5bdcfe74895ee384d9e2Form.delete = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy5c007ef53daf5bdcfe74895ee384d9e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy5c007ef53daf5bdcfe74895ee384d9e2.form = destroy5c007ef53daf5bdcfe74895ee384d9e2Form
/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/notifications/api/{notification}'
*/
const destroyebe6b46e30ede18860e267fd5755db6e = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyebe6b46e30ede18860e267fd5755db6e.url(args, options),
    method: 'delete',
})

destroyebe6b46e30ede18860e267fd5755db6e.definition = {
    methods: ["delete"],
    url: '/notifications/api/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/notifications/api/{notification}'
*/
destroyebe6b46e30ede18860e267fd5755db6e.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return destroyebe6b46e30ede18860e267fd5755db6e.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/notifications/api/{notification}'
*/
destroyebe6b46e30ede18860e267fd5755db6e.delete = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyebe6b46e30ede18860e267fd5755db6e.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/notifications/api/{notification}'
*/
const destroyebe6b46e30ede18860e267fd5755db6eForm = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyebe6b46e30ede18860e267fd5755db6e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::destroy
* @see app/Http/Controllers/NotificationController.php:147
* @route '/notifications/api/{notification}'
*/
destroyebe6b46e30ede18860e267fd5755db6eForm.delete = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyebe6b46e30ede18860e267fd5755db6e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyebe6b46e30ede18860e267fd5755db6e.form = destroyebe6b46e30ede18860e267fd5755db6eForm

export const destroy = {
    '/api/notifications/{notification}': destroy5c007ef53daf5bdcfe74895ee384d9e2,
    '/notifications/api/{notification}': destroyebe6b46e30ede18860e267fd5755db6e,
}

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/api/notifications/{notification}/mark-read'
*/
const markAsRead5b2c9f0f920e08a7a78910871663fe80 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead5b2c9f0f920e08a7a78910871663fe80.url(args, options),
    method: 'post',
})

markAsRead5b2c9f0f920e08a7a78910871663fe80.definition = {
    methods: ["post"],
    url: '/api/notifications/{notification}/mark-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/api/notifications/{notification}/mark-read'
*/
markAsRead5b2c9f0f920e08a7a78910871663fe80.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return markAsRead5b2c9f0f920e08a7a78910871663fe80.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/api/notifications/{notification}/mark-read'
*/
markAsRead5b2c9f0f920e08a7a78910871663fe80.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead5b2c9f0f920e08a7a78910871663fe80.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/api/notifications/{notification}/mark-read'
*/
const markAsRead5b2c9f0f920e08a7a78910871663fe80Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead5b2c9f0f920e08a7a78910871663fe80.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/api/notifications/{notification}/mark-read'
*/
markAsRead5b2c9f0f920e08a7a78910871663fe80Form.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead5b2c9f0f920e08a7a78910871663fe80.url(args, options),
    method: 'post',
})

markAsRead5b2c9f0f920e08a7a78910871663fe80.form = markAsRead5b2c9f0f920e08a7a78910871663fe80Form
/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/notifications/api/{notification}/mark-read'
*/
const markAsRead557da1360fd94b140370478cee473d66 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead557da1360fd94b140370478cee473d66.url(args, options),
    method: 'post',
})

markAsRead557da1360fd94b140370478cee473d66.definition = {
    methods: ["post"],
    url: '/notifications/api/{notification}/mark-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/notifications/api/{notification}/mark-read'
*/
markAsRead557da1360fd94b140370478cee473d66.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return markAsRead557da1360fd94b140370478cee473d66.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/notifications/api/{notification}/mark-read'
*/
markAsRead557da1360fd94b140370478cee473d66.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead557da1360fd94b140370478cee473d66.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/notifications/api/{notification}/mark-read'
*/
const markAsRead557da1360fd94b140370478cee473d66Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead557da1360fd94b140370478cee473d66.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:113
* @route '/notifications/api/{notification}/mark-read'
*/
markAsRead557da1360fd94b140370478cee473d66Form.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead557da1360fd94b140370478cee473d66.url(args, options),
    method: 'post',
})

markAsRead557da1360fd94b140370478cee473d66.form = markAsRead557da1360fd94b140370478cee473d66Form

export const markAsRead = {
    '/api/notifications/{notification}/mark-read': markAsRead5b2c9f0f920e08a7a78910871663fe80,
    '/notifications/api/{notification}/mark-read': markAsRead557da1360fd94b140370478cee473d66,
}

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/api/notifications/{notification}/mark-unread'
*/
const markAsUnread9a53912ca6661c4443d89966ea65b460 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsUnread9a53912ca6661c4443d89966ea65b460.url(args, options),
    method: 'post',
})

markAsUnread9a53912ca6661c4443d89966ea65b460.definition = {
    methods: ["post"],
    url: '/api/notifications/{notification}/mark-unread',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/api/notifications/{notification}/mark-unread'
*/
markAsUnread9a53912ca6661c4443d89966ea65b460.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return markAsUnread9a53912ca6661c4443d89966ea65b460.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/api/notifications/{notification}/mark-unread'
*/
markAsUnread9a53912ca6661c4443d89966ea65b460.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsUnread9a53912ca6661c4443d89966ea65b460.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/api/notifications/{notification}/mark-unread'
*/
const markAsUnread9a53912ca6661c4443d89966ea65b460Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsUnread9a53912ca6661c4443d89966ea65b460.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/api/notifications/{notification}/mark-unread'
*/
markAsUnread9a53912ca6661c4443d89966ea65b460Form.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsUnread9a53912ca6661c4443d89966ea65b460.url(args, options),
    method: 'post',
})

markAsUnread9a53912ca6661c4443d89966ea65b460.form = markAsUnread9a53912ca6661c4443d89966ea65b460Form
/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/notifications/api/{notification}/mark-unread'
*/
const markAsUnread56e9b30d006b756d17e6946187688aa4 = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsUnread56e9b30d006b756d17e6946187688aa4.url(args, options),
    method: 'post',
})

markAsUnread56e9b30d006b756d17e6946187688aa4.definition = {
    methods: ["post"],
    url: '/notifications/api/{notification}/mark-unread',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/notifications/api/{notification}/mark-unread'
*/
markAsUnread56e9b30d006b756d17e6946187688aa4.url = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return markAsUnread56e9b30d006b756d17e6946187688aa4.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/notifications/api/{notification}/mark-unread'
*/
markAsUnread56e9b30d006b756d17e6946187688aa4.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsUnread56e9b30d006b756d17e6946187688aa4.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/notifications/api/{notification}/mark-unread'
*/
const markAsUnread56e9b30d006b756d17e6946187688aa4Form = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsUnread56e9b30d006b756d17e6946187688aa4.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAsUnread
* @see app/Http/Controllers/NotificationController.php:130
* @route '/notifications/api/{notification}/mark-unread'
*/
markAsUnread56e9b30d006b756d17e6946187688aa4Form.post = (args: { notification: string | number | { id: string | number } } | [notification: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsUnread56e9b30d006b756d17e6946187688aa4.url(args, options),
    method: 'post',
})

markAsUnread56e9b30d006b756d17e6946187688aa4.form = markAsUnread56e9b30d006b756d17e6946187688aa4Form

export const markAsUnread = {
    '/api/notifications/{notification}/mark-unread': markAsUnread9a53912ca6661c4443d89966ea65b460,
    '/notifications/api/{notification}/mark-unread': markAsUnread56e9b30d006b756d17e6946187688aa4,
}

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
const getSettings717347f9088fbe5012cd2b0ea39290e9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'get',
})

getSettings717347f9088fbe5012cd2b0ea39290e9.definition = {
    methods: ["get","head"],
    url: '/api/notifications/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
getSettings717347f9088fbe5012cd2b0ea39290e9.url = (options?: RouteQueryOptions) => {
    return getSettings717347f9088fbe5012cd2b0ea39290e9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
getSettings717347f9088fbe5012cd2b0ea39290e9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
getSettings717347f9088fbe5012cd2b0ea39290e9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
const getSettings717347f9088fbe5012cd2b0ea39290e9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
getSettings717347f9088fbe5012cd2b0ea39290e9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/api/notifications/settings'
*/
getSettings717347f9088fbe5012cd2b0ea39290e9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettings717347f9088fbe5012cd2b0ea39290e9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSettings717347f9088fbe5012cd2b0ea39290e9.form = getSettings717347f9088fbe5012cd2b0ea39290e9Form
/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
const getSettingse93a87305d2f8102aa18da1a1e4c8e8f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'get',
})

getSettingse93a87305d2f8102aa18da1a1e4c8e8f.definition = {
    methods: ["get","head"],
    url: '/notifications/api/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url = (options?: RouteQueryOptions) => {
    return getSettingse93a87305d2f8102aa18da1a1e4c8e8f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
getSettingse93a87305d2f8102aa18da1a1e4c8e8f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
getSettingse93a87305d2f8102aa18da1a1e4c8e8f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
const getSettingse93a87305d2f8102aa18da1a1e4c8e8fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
getSettingse93a87305d2f8102aa18da1a1e4c8e8fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::getSettings
* @see app/Http/Controllers/NotificationController.php:209
* @route '/notifications/api/settings'
*/
getSettingse93a87305d2f8102aa18da1a1e4c8e8fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSettingse93a87305d2f8102aa18da1a1e4c8e8f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSettingse93a87305d2f8102aa18da1a1e4c8e8f.form = getSettingse93a87305d2f8102aa18da1a1e4c8e8fForm

export const getSettings = {
    '/api/notifications/settings': getSettings717347f9088fbe5012cd2b0ea39290e9,
    '/notifications/api/settings': getSettingse93a87305d2f8102aa18da1a1e4c8e8f,
}

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/api/notifications/settings'
*/
const updateSettings717347f9088fbe5012cd2b0ea39290e9 = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'put',
})

updateSettings717347f9088fbe5012cd2b0ea39290e9.definition = {
    methods: ["put"],
    url: '/api/notifications/settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/api/notifications/settings'
*/
updateSettings717347f9088fbe5012cd2b0ea39290e9.url = (options?: RouteQueryOptions) => {
    return updateSettings717347f9088fbe5012cd2b0ea39290e9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/api/notifications/settings'
*/
updateSettings717347f9088fbe5012cd2b0ea39290e9.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSettings717347f9088fbe5012cd2b0ea39290e9.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/api/notifications/settings'
*/
const updateSettings717347f9088fbe5012cd2b0ea39290e9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSettings717347f9088fbe5012cd2b0ea39290e9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/api/notifications/settings'
*/
updateSettings717347f9088fbe5012cd2b0ea39290e9Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSettings717347f9088fbe5012cd2b0ea39290e9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSettings717347f9088fbe5012cd2b0ea39290e9.form = updateSettings717347f9088fbe5012cd2b0ea39290e9Form
/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/notifications/api/settings'
*/
const updateSettingse93a87305d2f8102aa18da1a1e4c8e8f = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'put',
})

updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.definition = {
    methods: ["put"],
    url: '/notifications/api/settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/notifications/api/settings'
*/
updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.url = (options?: RouteQueryOptions) => {
    return updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/notifications/api/settings'
*/
updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/notifications/api/settings'
*/
const updateSettingse93a87305d2f8102aa18da1a1e4c8e8fForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::updateSettings
* @see app/Http/Controllers/NotificationController.php:226
* @route '/notifications/api/settings'
*/
updateSettingse93a87305d2f8102aa18da1a1e4c8e8fForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSettingse93a87305d2f8102aa18da1a1e4c8e8f.form = updateSettingse93a87305d2f8102aa18da1a1e4c8e8fForm

export const updateSettings = {
    '/api/notifications/settings': updateSettings717347f9088fbe5012cd2b0ea39290e9,
    '/notifications/api/settings': updateSettingse93a87305d2f8102aa18da1a1e4c8e8f,
}

const NotificationController = { index, unread, upcoming, history, checkPending, store, update, destroy, markAsRead, markAsUnread, getSettings, updateSettings }

export default NotificationController