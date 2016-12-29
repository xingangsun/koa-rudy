/*
 * @Author: enzo
 * @Date:   2016-11-07 18:55:12
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-11-29 16:10:36
 */

// 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
// 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
// 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
// 204 NO CONTENT - [DELETE]：用户删除数据成功。
// 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
// 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
// 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
// 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
// 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
// 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
// 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
// 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
// 700 api
// 800 server

const STATUS_ERROR = 'error';
const STATUS_INFO = 'info';
const STATUS_WARN = 'warn';

module.exports = {
    200: STATUS_INFO,
    201: STATUS_INFO,
    202: STATUS_INFO,
    204: STATUS_INFO,
    400: STATUS_ERROR,
    401: STATUS_INFO,
    403: STATUS_INFO,
    404: STATUS_WARN,
    406: STATUS_INFO,
    410: STATUS_INFO,
    422: STATUS_INFO,
    500: STATUS_ERROR,
    700: STATUS_ERROR,
    800: STATUS_ERROR,
}