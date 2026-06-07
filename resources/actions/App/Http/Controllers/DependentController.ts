import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
const index980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

index980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return index980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
const index980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index980bb49ee7ae63891f1d891d2fbcf1c9.form = index980bb49ee7ae63891f1d891d2fbcf1c9Form
/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
const index42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

index42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return index42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
const index42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index42a740574ecbfbac32f8cc353fc32db9.form = index42a740574ecbfbac32f8cc353fc32db9Form
/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
const index7cf7c1a82191a20ee2c9b3d2d10a1561 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7cf7c1a82191a20ee2c9b3d2d10a1561.url(options),
    method: 'get',
})

index7cf7c1a82191a20ee2c9b3d2d10a1561.definition = {
    methods: ["get","head"],
    url: '/profils',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
index7cf7c1a82191a20ee2c9b3d2d10a1561.url = (options?: RouteQueryOptions) => {
    return index7cf7c1a82191a20ee2c9b3d2d10a1561.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
index7cf7c1a82191a20ee2c9b3d2d10a1561.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7cf7c1a82191a20ee2c9b3d2d10a1561.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
index7cf7c1a82191a20ee2c9b3d2d10a1561.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7cf7c1a82191a20ee2c9b3d2d10a1561.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
const index7cf7c1a82191a20ee2c9b3d2d10a1561Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index7cf7c1a82191a20ee2c9b3d2d10a1561.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
index7cf7c1a82191a20ee2c9b3d2d10a1561Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index7cf7c1a82191a20ee2c9b3d2d10a1561.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DependentController::index
* @see app/Http/Controllers/DependentController.php:13
* @route '/profils'
*/
index7cf7c1a82191a20ee2c9b3d2d10a1561Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index7cf7c1a82191a20ee2c9b3d2d10a1561.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index7cf7c1a82191a20ee2c9b3d2d10a1561.form = index7cf7c1a82191a20ee2c9b3d2d10a1561Form

export const index = {
    '/': index980bb49ee7ae63891f1d891d2fbcf1c9,
    '/dashboard': index42a740574ecbfbac32f8cc353fc32db9,
    '/profils': index7cf7c1a82191a20ee2c9b3d2d10a1561,
}

/**
* @see \App\Http\Controllers\DependentController::store
* @see app/Http/Controllers/DependentController.php:43
* @route '/dependants'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dependants',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DependentController::store
* @see app/Http/Controllers/DependentController.php:43
* @route '/dependants'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::store
* @see app/Http/Controllers/DependentController.php:43
* @route '/dependants'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::store
* @see app/Http/Controllers/DependentController.php:43
* @route '/dependants'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::store
* @see app/Http/Controllers/DependentController.php:43
* @route '/dependants'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DependentController::destroy
* @see app/Http/Controllers/DependentController.php:62
* @route '/dependents/{dependent}'
*/
export const destroy = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dependents/{dependent}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DependentController::destroy
* @see app/Http/Controllers/DependentController.php:62
* @route '/dependents/{dependent}'
*/
destroy.url = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dependent: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { dependent: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            dependent: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dependent: typeof args.dependent === 'object'
        ? args.dependent.id
        : args.dependent,
    }

    return destroy.definition.url
            .replace('{dependent}', parsedArgs.dependent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::destroy
* @see app/Http/Controllers/DependentController.php:62
* @route '/dependents/{dependent}'
*/
destroy.delete = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DependentController::destroy
* @see app/Http/Controllers/DependentController.php:62
* @route '/dependents/{dependent}'
*/
const destroyForm = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::destroy
* @see app/Http/Controllers/DependentController.php:62
* @route '/dependents/{dependent}'
*/
destroyForm.delete = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\DependentController::select
* @see app/Http/Controllers/DependentController.php:81
* @route '/dependents/{dependent}/select'
*/
export const select = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: select.url(args, options),
    method: 'post',
})

select.definition = {
    methods: ["post"],
    url: '/dependents/{dependent}/select',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DependentController::select
* @see app/Http/Controllers/DependentController.php:81
* @route '/dependents/{dependent}/select'
*/
select.url = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dependent: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { dependent: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            dependent: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dependent: typeof args.dependent === 'object'
        ? args.dependent.id
        : args.dependent,
    }

    return select.definition.url
            .replace('{dependent}', parsedArgs.dependent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::select
* @see app/Http/Controllers/DependentController.php:81
* @route '/dependents/{dependent}/select'
*/
select.post = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: select.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::select
* @see app/Http/Controllers/DependentController.php:81
* @route '/dependents/{dependent}/select'
*/
const selectForm = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: select.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::select
* @see app/Http/Controllers/DependentController.php:81
* @route '/dependents/{dependent}/select'
*/
selectForm.post = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: select.url(args, options),
    method: 'post',
})

select.form = selectForm

/**
* @see \App\Http\Controllers\DependentController::join
* @see app/Http/Controllers/DependentController.php:95
* @route '/dependents/join'
*/
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/dependents/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DependentController::join
* @see app/Http/Controllers/DependentController.php:95
* @route '/dependents/join'
*/
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::join
* @see app/Http/Controllers/DependentController.php:95
* @route '/dependents/join'
*/
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::join
* @see app/Http/Controllers/DependentController.php:95
* @route '/dependents/join'
*/
const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: join.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::join
* @see app/Http/Controllers/DependentController.php:95
* @route '/dependents/join'
*/
joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: join.url(options),
    method: 'post',
})

join.form = joinForm

/**
* @see \App\Http\Controllers\DependentController::update
* @see app/Http/Controllers/DependentController.php:123
* @route '/dependents/{dependent}'
*/
export const update = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dependents/{dependent}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\DependentController::update
* @see app/Http/Controllers/DependentController.php:123
* @route '/dependents/{dependent}'
*/
update.url = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dependent: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { dependent: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            dependent: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dependent: typeof args.dependent === 'object'
        ? args.dependent.id
        : args.dependent,
    }

    return update.definition.url
            .replace('{dependent}', parsedArgs.dependent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DependentController::update
* @see app/Http/Controllers/DependentController.php:123
* @route '/dependents/{dependent}'
*/
update.put = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DependentController::update
* @see app/Http/Controllers/DependentController.php:123
* @route '/dependents/{dependent}'
*/
const updateForm = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DependentController::update
* @see app/Http/Controllers/DependentController.php:123
* @route '/dependents/{dependent}'
*/
updateForm.put = (args: { dependent: number | { id: number } } | [dependent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const DependentController = { index, store, destroy, select, join, update }

export default DependentController