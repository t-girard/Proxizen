import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

const dependants = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default dependants