import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

const dependents = {
    select: Object.assign(select, select),
}

export default dependents