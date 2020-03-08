/**
 * Slackチャンネルに[おみくじ]と入れたら、ランダムの結果を返すBot
 * 
 * [yarn install]はエラーになるので、 [yarn install --no-bin-links]を実行
 */

/**
 * インストール
 * yarn global add yo@3.0.0
 * yarn global add generator-hubot
 * yarn global add coffeescript@1.12.7
 * 
 * cd ~/workspace
 * mkdir hubot-study
 * cd hubot-study
 * 
 * yo hubot
 * を実行。
 * だいたいデフォルト。[Bot adapter]のみ[slack]を入力
 * エラー出て[Dane]にならなかった
 * yarn global add generator-hubot-yarn
 * yo hubot-yarn
 * で[Overwrite ～] に yで返答したら[Dane]になった
 * 
 * 単体テストは[bin/hubot]で起動
 * [hello>]を入れて[Hello, <@1>]が返ってくればOK
 * 
 * サーバでの起動は
 * slackと連携するには、slackのワークスペースにHubotを追加して[HUBOT_SLACK_TOKEN=xoxb-xxxx～]と書かれたトークンを取得
 * チャンネルにHubotを追加する
 * env HUBOT_SLACK_TOKEN=xoxb-jdlasjdfaijfefjljlfkdsjfliejlfejlfaelij bin/hubot --adapter slack
 * を実行
 */
'use strict';
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];

module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
        //正規表現[/hello>/i]にマッチした場合の処理
        const user_id = msg.message.user.id;
        msg.send(`hello, <@${user_id}>`);   // ← [']ではなく[`]。動かなかった
    });
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${username}の運勢は` + lot + 'です。');
	});
};
