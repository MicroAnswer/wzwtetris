/**
 * 游戏中下落的素材，都是来自这个数组里面。
 * 这里面为了保证每个材料机会相同，有可能出现重复的
 *
 *
 * created：Microanswer
 * update: 2020年1月13日09:37:22
 * */

var STUFS = [[

    [0, 0, 0, 0], /* 长条 */
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 长条 */
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0]], [

    [0, 1, 0, 0], /* 长条 */
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]], [

    [0, 1, 0, 0], /* 长条 */
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]], [

    // ------------------------------------------------

    [0, 0, 0, 0], /* 四块 */
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 四块 */
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 四块 */
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 四块 */
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    // ------------------------------------------------

    [0, 0, 0, 0], /* 翻7 */
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 翻7 */
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]], [

    [0, 0, 0, 0], /* 翻7 */
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 翻7 */
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0]], [

    // ------------------------------------------------

    [0, 0, 0, 0], /* 正7 */
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 正7 */
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]], [

    [0, 0, 0, 0], /* 正7 */
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0]], [

    [0, 1, 0, 0], /* 正7 */
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [


    // ------------------------------------------------

    [0, 0, 0, 0], /* 土 */
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 土 */
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0]], [

    [0, 0, 0, 0], /* 土 */
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 土 */
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 0]], [


    // ------------------------------------------------

    [0, 0, 0, 0], /* z */
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* z */
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* z */
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0]], [

    [0, 0, 0, 0], /* z */
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0]], [


    // ------------------------------------------------

    [0, 0, 0, 0], /* 翻z */
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 翻z */
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], [

    [0, 0, 0, 0], /* 翻z */
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0]], [

    [0, 0, 0, 0], /* 翻z */
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0]]
];

module.exports = STUFS;