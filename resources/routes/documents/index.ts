import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/documents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DocumentController::index
* @see app/Http/Controllers/DocumentController.php:12
* @route '/documents'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\DocumentController::store
* @see app/Http/Controllers/DocumentController.php:25
* @route '/documents'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentController::store
* @see app/Http/Controllers/DocumentController.php:25
* @route '/documents'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentController::store
* @see app/Http/Controllers/DocumentController.php:25
* @route '/documents'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DocumentController::store
* @see app/Http/Controllers/DocumentController.php:25
* @route '/documents'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DocumentController::store
* @see app/Http/Controllers/DocumentController.php:25
* @route '/documents'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DocumentController::destroy
* @see app/Http/Controllers/DocumentController.php:0
* @route '/documents/{document}'
*/
export const destroy = (args: { document: string | number } | [document: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/documents/{document}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DocumentController::destroy
* @see app/Http/Controllers/DocumentController.php:0
* @route '/documents/{document}'
*/
destroy.url = (args: { document: string | number } | [document: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: args.document,
    }

    return destroy.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentController::destroy
* @see app/Http/Controllers/DocumentController.php:0
* @route '/documents/{document}'
*/
destroy.delete = (args: { document: string | number } | [document: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DocumentController::destroy
* @see app/Http/Controllers/DocumentController.php:0
* @route '/documents/{document}'
*/
const destroyForm = (args: { document: string | number } | [document: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DocumentController::destroy
* @see app/Http/Controllers/DocumentController.php:0
* @route '/documents/{document}'
*/
destroyForm.delete = (args: { document: string | number } | [document: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const documents = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default documents