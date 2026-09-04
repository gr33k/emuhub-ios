# EmuHub Clients

One EmuHub library, purpose-built clients for your devices.

[Main EmuHub project](https://github.com/gr33k/emuhub)

These applications run **EmuHub itself**: connect to your EmuHub server, browse
its library, use its account and media features, and launch games through the
client's supported emulator integrations. They are not individual standalone
emulators, and do not include a game library or firmware collection.

| Client | Platform | Documentation | Wiki |
| --- | --- | --- | --- |
| [EmuHub iOS](https://github.com/gr33k/emuhub-ios) | iPhone and iPad | [Guide](https://github.com/gr33k/emuhub-ios/tree/main/docs/wiki) | [Wiki](https://github.com/gr33k/emuhub-ios/wiki) |
| [EmuHub webOS](https://github.com/gr33k/emuhub-webos) | LG webOS TVs | [Guide](https://github.com/gr33k/emuhub-webos/tree/main/docs/wiki) | [Wiki](https://github.com/gr33k/emuhub-webos/wiki) |
| [EmuHub Fire TV](https://github.com/gr33k/emuhub-firetv) | Fire TV and Android TV | [Guide](https://github.com/gr33k/emuhub-firetv/tree/main/docs/wiki) | [Wiki](https://github.com/gr33k/emuhub-firetv/wiki) |

## Clients and cores are different projects

Client repositories own platform UI, server connection, input, and runtime
integration. The EmuHub server owns library administration and server services.
Reusable emulator implementations retain their own repositories and licenses.
The main server repository is currently private; linking it does not change
its access or publish its implementation.

[ARMSX3](https://github.com/gr33k/ARMSX3/tree/ios-core) is an affiliated PS3
emulator/core and standalone app, **not** an EmuHub client. Its standalone
releases, branding, compatibility results, and renderer development are separate.
A standalone game test does not establish working embedded PS3 support in EmuHub.

## Publication status

This first client-repository publication contains reviewed documentation and
input references. Client source extraction and independent-clone build
qualification are still in progress. These repositories do not yet publish
client application binaries. Existing development builds are not promoted to
public releases by publishing these guides.

No server implementation, credentials, private deployment configuration,
firmware, game files, or device logs are distributed here. Original development
history remains preserved separately; this is a deliberately clean publication.
