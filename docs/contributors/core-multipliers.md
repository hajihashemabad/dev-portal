---
id: core-multipliers
title: Multipliers
keywords:
  - core
  - multipliers
description: Core protocol design - multipliers.
---

---

The Zilliqa network - specifically, the DS committee and shard nodes - maintain a list of lookup nodes. All blockchain data generated by the network are forwarded to these lookup nodes, in order for them to function as [full nodes](../basics/basics-zil-nodes#lookup-nodes).

On the other hand, the network has no direct knowledge of all existing [seed nodes](../basics/basics-zil-nodes#seed-nodes). Seed nodes, which are also full nodes, need to receive the same data as the lookup nodes to remain synced with the network. Among these seed nodes are the ones maintained by Zilliqa Research to service the public API, as well as the ones hosted by exchanges and ecosystem partners.

To address this communication gap, multipliers play the role of receiving blockchain data-related messages from the network and forwarding them to seed nodes. In addition to the aforementioned lookup nodes, the network also maintains a list of these multiplier nodes, hence blockchain data is also sent to them. The Zilliqa Mainnet runs with several multipliers, each one configured to forward messages to a list of seed nodes identified by their IP address and port.

The multiplier is a simple Go program that basically listens at a particular port for incoming messages and forwards the messages to the forwarding list. It periodically checks this list for any updates, enabling the addition or removal of seed nodes anytime. The multiplier uses hashes to prevent duplicate messsages from being forwarded repeatedly. It is robust enough to retry sending messages to recipients in the event of I/O timeout errors, which could happen due to network glitches on either end.
