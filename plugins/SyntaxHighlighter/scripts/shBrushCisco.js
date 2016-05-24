/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.382 (June 24 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
SyntaxHighlighter.brushes.Vb = function()
{
	var keywords =	'enable disable en configure terminal conf t logg syn exec-timeout exec-t ' +
			'ip add no shut int cdp run host exit end show ip route ping hostname ' +
			'password secret interface serial aux console login pass address ' +
			'clock shutdown rate description address logging synchronous vty ' +
			'access-class permit access-list banner sh brief write running-config ' +
			'startup-config loopback lo domain-lookup erase copy protocols ' +
			'rip net network passive-interface split-horizon unnumbered cef version ' +
			'redistribute static auto-summary ver summary-address ' +
			'chain authentication key-chain mode key-string classless eigrp ' +
			'hello-interval hold-time neighbors interfaces detail ospf dead-interval ' +
			'point-to-point area router-id priority auto-cost reference-bandwidth ' +
			'authentication-key message-digest message-digest-key default-gateway ' +
			'default-information originate always routing privilege username ' +
			'switchport port-security maximum max swi access violation protect ' +
			'include restrict mod acc nonegotiate trunk encapsulation voice native ' +
			'reload vtp status pruning spanning-tree primary frame-relay lmi-type ' +
			'ppp multilink intf-type broadcast ietf map inverse-arp extended standard ' +
			'deny permit resequence crypto key generate rsa transport input ssh ' +
			'default-router dns-server domain-name excluded-address pool lease ' +
			'helper-address nat overload inside source translations outside ipv6 ' +
			'unicast-routing tunnel destination snooping '
			;

	this.regexList = [
		{ regex: /'.*$/gm,										css: 'comments' },			// one line comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
		{ regex: /^\s*#.*$/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// vb keyword
		];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Vb.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Vb.aliases	= ['cisco'];
