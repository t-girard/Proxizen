import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see routes/web.php:56
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:56
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see routes/web.php:56
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see routes/web.php:56
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:56
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see routes/web.php:45
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/web.php:45
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see routes/web.php:45
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see routes/web.php:45
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see routes/web.php:45
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
export const forgotPassword = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgotPassword.url(options),
    method: 'get',
})

forgotPassword.definition = {
    methods: ["get","head"],
    url: '/forgot-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
forgotPassword.url = (options?: RouteQueryOptions) => {
    return forgotPassword.definition.url + queryParams(options)
}

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
forgotPassword.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgotPassword.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
forgotPassword.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forgotPassword.url(options),
    method: 'head',
})

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
const forgotPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgotPassword.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
forgotPasswordForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgotPassword.url(options),
    method: 'get',
})

/**
* @see routes/web.php:58
* @route '/forgot-password'
*/
forgotPasswordForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgotPassword.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

forgotPassword.form = forgotPasswordForm

/**
* @see routes/web.php:57
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:57
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see routes/web.php:57
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see routes/web.php:57
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:57
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
export const profils = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profils.url(options),
    method: 'get',
})

profils.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
profils.url = (options?: RouteQueryOptions) => {
    return profils.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
profils.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profils.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
profils.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profils.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
const profilsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profils.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
profilsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profils.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::profils
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
profilsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profils.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profils.form = profilsForm

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:23
* @route '/home'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
export const calendrier = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendrier.url(options),
    method: 'get',
})

calendrier.definition = {
    methods: ["get","head"],
    url: '/calendrier',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
calendrier.url = (options?: RouteQueryOptions) => {
    return calendrier.definition.url + queryParams(options)
}

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
calendrier.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendrier.url(options),
    method: 'get',
})

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
calendrier.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendrier.url(options),
    method: 'head',
})

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
const calendrierForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendrier.url(options),
    method: 'get',
})

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
calendrierForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendrier.url(options),
    method: 'get',
})

/**
* @see routes/web.php:28
* @route '/calendrier'
*/
calendrierForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendrier.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendrier.form = calendrierForm

/**
* @see routes/web.php:40
* @route '/notifications'
*/
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:40
* @route '/notifications'
*/
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see routes/web.php:40
* @route '/notifications'
*/
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:40
* @route '/notifications'
*/
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

/**
* @see routes/web.php:40
* @route '/notifications'
*/
const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:40
* @route '/notifications'
*/
notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:40
* @route '/notifications'
*/
notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notifications.form = notificationsForm
